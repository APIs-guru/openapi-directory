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
// EnumOperatorOptions
/**
 * Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.
**/
var EnumOperatorOptions = /** @class */ (function (_super) {
    __extends(EnumOperatorOptions, _super);
    function EnumOperatorOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatorName" }),
        __metadata("design:type", String)
    ], EnumOperatorOptions.prototype, "operatorName", void 0);
    return EnumOperatorOptions;
}(SpeakeasyBase));
export { EnumOperatorOptions };
