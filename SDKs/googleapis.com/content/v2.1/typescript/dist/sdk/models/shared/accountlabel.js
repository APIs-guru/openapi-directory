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
export var AccountLabelLabelTypeEnum;
(function (AccountLabelLabelTypeEnum) {
    AccountLabelLabelTypeEnum["LabelTypeUnspecified"] = "LABEL_TYPE_UNSPECIFIED";
    AccountLabelLabelTypeEnum["Manual"] = "MANUAL";
    AccountLabelLabelTypeEnum["Automatic"] = "AUTOMATIC";
})(AccountLabelLabelTypeEnum || (AccountLabelLabelTypeEnum = {}));
// AccountLabel
/**
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
**/
var AccountLabel = /** @class */ (function (_super) {
    __extends(AccountLabel, _super);
    function AccountLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], AccountLabel.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AccountLabel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelId" }),
        __metadata("design:type", String)
    ], AccountLabel.prototype, "labelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelType" }),
        __metadata("design:type", String)
    ], AccountLabel.prototype, "labelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountLabel.prototype, "name", void 0);
    return AccountLabel;
}(SpeakeasyBase));
export { AccountLabel };
// AccountLabelInput
/**
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
**/
var AccountLabelInput = /** @class */ (function (_super) {
    __extends(AccountLabelInput, _super);
    function AccountLabelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], AccountLabelInput.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AccountLabelInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountLabelInput.prototype, "name", void 0);
    return AccountLabelInput;
}(SpeakeasyBase));
export { AccountLabelInput };
