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
import { Date } from "./date";
import { Integer } from "./integer";
import { Selection } from "./selection";
import { SelectionList } from "./selectionlist";
import { Text } from "./text";
import { TextList } from "./textlist";
import { SingleUser } from "./singleuser";
import { UserList } from "./userlist";
// FieldValue
/**
 * Contains a value of a Field.
**/
var FieldValue = /** @class */ (function (_super) {
    __extends(FieldValue, _super);
    function FieldValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], FieldValue.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integer" }),
        __metadata("design:type", Integer)
    ], FieldValue.prototype, "integer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selection" }),
        __metadata("design:type", Selection)
    ], FieldValue.prototype, "selection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectionList" }),
        __metadata("design:type", SelectionList)
    ], FieldValue.prototype, "selectionList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Text)
    ], FieldValue.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textList" }),
        __metadata("design:type", TextList)
    ], FieldValue.prototype, "textList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", SingleUser)
    ], FieldValue.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userList" }),
        __metadata("design:type", UserList)
    ], FieldValue.prototype, "userList", void 0);
    return FieldValue;
}(SpeakeasyBase));
export { FieldValue };
