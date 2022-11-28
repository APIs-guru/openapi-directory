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
import { UserMetadata } from "./usermetadata";
import { UserProfileRequest } from "./userprofilerequest";
var OfferingUser = /** @class */ (function (_super) {
    __extends(OfferingUser, _super);
    function OfferingUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OfferingUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], OfferingUser.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFacilitator" }),
        __metadata("design:type", Boolean)
    ], OfferingUser.prototype, "isFacilitator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isMarker" }),
        __metadata("design:type", Boolean)
    ], OfferingUser.prototype, "isMarker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isReadonly" }),
        __metadata("design:type", Boolean)
    ], OfferingUser.prototype, "isReadonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], OfferingUser.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", UserMetadata)
    ], OfferingUser.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personId" }),
        __metadata("design:type", String)
    ], OfferingUser.prototype, "personId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", UserProfileRequest)
    ], OfferingUser.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendInvite" }),
        __metadata("design:type", Boolean)
    ], OfferingUser.prototype, "sendInvite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendNotificationEmail" }),
        __metadata("design:type", Boolean)
    ], OfferingUser.prototype, "sendNotificationEmail", void 0);
    return OfferingUser;
}(SpeakeasyBase));
export { OfferingUser };
