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
export var SubaccountRequestSubAccountEditEnum;
(function (SubaccountRequestSubAccountEditEnum) {
    SubaccountRequestSubAccountEditEnum["SetPrice"] = "setPrice";
    SubaccountRequestSubAccountEditEnum["AddCredit"] = "addCredit";
    SubaccountRequestSubAccountEditEnum["SetRestriction"] = "setRestriction";
})(SubaccountRequestSubAccountEditEnum || (SubaccountRequestSubAccountEditEnum = {}));
export var SubaccountRequestSubAccountRestrictionStopEnum;
(function (SubaccountRequestSubAccountRestrictionStopEnum) {
    SubaccountRequestSubAccountRestrictionStopEnum["Zero"] = "0";
    SubaccountRequestSubAccountRestrictionStopEnum["One"] = "1";
})(SubaccountRequestSubAccountRestrictionStopEnum || (SubaccountRequestSubAccountRestrictionStopEnum = {}));
export var SubaccountRequestSubAccountRestrictionTimeEnum;
(function (SubaccountRequestSubAccountRestrictionTimeEnum) {
    SubaccountRequestSubAccountRestrictionTimeEnum["Zero"] = "0";
    SubaccountRequestSubAccountRestrictionTimeEnum["One"] = "1";
})(SubaccountRequestSubAccountRestrictionTimeEnum || (SubaccountRequestSubAccountRestrictionTimeEnum = {}));
var SubaccountRequest = /** @class */ (function (_super) {
    __extends(SubaccountRequest, _super);
    function SubaccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyid" }),
        __metadata("design:type", String)
    ], SubaccountRequest.prototype, "keyid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subAccountAddCredit" }),
        __metadata("design:type", String)
    ], SubaccountRequest.prototype, "subAccountAddCredit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subAccountCountryCode" }),
        __metadata("design:type", String)
    ], SubaccountRequest.prototype, "subAccountCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subAccountEdit" }),
        __metadata("design:type", String)
    ], SubaccountRequest.prototype, "subAccountEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subAccountKeyId" }),
        __metadata("design:type", String)
    ], SubaccountRequest.prototype, "subAccountKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subAccountPrice" }),
        __metadata("design:type", String)
    ], SubaccountRequest.prototype, "subAccountPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subAccountRestrictionStop" }),
        __metadata("design:type", String)
    ], SubaccountRequest.prototype, "subAccountRestrictionStop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subAccountRestrictionTime" }),
        __metadata("design:type", String)
    ], SubaccountRequest.prototype, "subAccountRestrictionTime", void 0);
    return SubaccountRequest;
}(SpeakeasyBase));
export { SubaccountRequest };
