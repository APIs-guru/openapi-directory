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
// ChangeLog
/**
 * Describes a change that a user has made to a resource.
**/
var ChangeLog = /** @class */ (function (_super) {
    __extends(ChangeLog, _super);
    function ChangeLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeTime" }),
        __metadata("design:type", Date)
    ], ChangeLog.prototype, "changeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldName" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "fieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newValue" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "newValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oldValue" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "oldValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userProfileId" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "userProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userProfileName" }),
        __metadata("design:type", String)
    ], ChangeLog.prototype, "userProfileName", void 0);
    return ChangeLog;
}(SpeakeasyBase));
export { ChangeLog };
