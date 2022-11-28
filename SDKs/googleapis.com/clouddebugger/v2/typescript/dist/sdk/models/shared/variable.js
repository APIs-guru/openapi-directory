var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusMessage } from "./statusmessage";
// Variable
/**
 * Represents a variable or an argument possibly of a compound object type. Note how the following variables are represented: 1) A simple variable: int x = 5 { name: "x", value: "5", type: "int" } // Captured variable 2) A compound object: struct T { int m1; int m2; }; T x = { 3, 7 }; { // Captured variable name: "x", type: "T", members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } 3) A pointer where the pointee was captured: T x = { 3, 7 }; T* p = &x; { // Captured variable name: "p", type: "T*", value: "0x00500500", members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } 4) A pointer where the pointee was not captured: T* p = new T; { // Captured variable name: "p", type: "T*", value: "0x00400400" status { is_error: true, description { format: "unavailable" } } } The status should describe the reason for the missing value, such as ``, ``, ``. Note that a null pointer should not have members. 5) An unnamed value: int* p = new int(7); { // Captured variable name: "p", value: "0x00500500", type: "int*", members { value: "7", type: "int" } } 6) An unnamed pointer where the pointee was not captured: int* p = new int(7); int** pp = &p; { // Captured variable name: "pp", value: "0x00500500", type: "int**", members { value: "0x00400400", type: "int*" status { is_error: true, description: { format: "unavailable" } } } } } To optimize computation, memory and network traffic, variables that repeat in the output multiple times can be stored once in a shared variable table and be referenced using the `var_table_index` field. The variables stored in the shared table are nameless and are essentially a partition of the complete variable. To reconstruct the complete variable, merge the referencing variable with the referenced variable. When using the shared variable table, the following variables: T x = { 3, 7 }; T* p = &x; T& r = x; { name: "x", var_table_index: 3, type: "T" } // Captured variables { name: "p", value "0x00500500", type="T*", var_table_index: 3 } { name: "r", type="T&", var_table_index: 3 } { // Shared variable table entry #3: members { name: "m1", value: "3", type: "int" }, members { name: "m2", value: "7", type: "int" } } Note that the pointer address is stored with the referencing variable and not with the referenced variable. This allows the referenced variable to be shared between pointers and references. The type field is optional. The debugger agent may or may not support it.
**/
var Variable = /** @class */ (function (_super) {
    __extends(Variable, _super);
    function Variable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members", elemType: Variable }),
        __metadata("design:type", Array)
    ], Variable.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Variable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", StatusMessage)
    ], Variable.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Variable.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Variable.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=varTableIndex" }),
        __metadata("design:type", Number)
    ], Variable.prototype, "varTableIndex", void 0);
    return Variable;
}(SpeakeasyBase));
export { Variable };
