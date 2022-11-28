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
import { UrlRestriction } from "./urlrestriction";
export var UserListStatusEnum;
(function (UserListStatusEnum) {
    UserListStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    UserListStatusEnum["Open"] = "OPEN";
    UserListStatusEnum["Closed"] = "CLOSED";
})(UserListStatusEnum || (UserListStatusEnum = {}));
// UserListInput
/**
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
**/
var UserListInput = /** @class */ (function (_super) {
    __extends(UserListInput, _super);
    function UserListInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UserListInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UserListInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipDurationDays" }),
        __metadata("design:type", String)
    ], UserListInput.prototype, "membershipDurationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlRestriction" }),
        __metadata("design:type", UrlRestriction)
    ], UserListInput.prototype, "urlRestriction", void 0);
    return UserListInput;
}(SpeakeasyBase));
export { UserListInput };
// UserList
/**
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
**/
var UserList = /** @class */ (function (_super) {
    __extends(UserList, _super);
    function UserList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UserList.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UserList.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipDurationDays" }),
        __metadata("design:type", String)
    ], UserList.prototype, "membershipDurationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserList.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UserList.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlRestriction" }),
        __metadata("design:type", UrlRestriction)
    ], UserList.prototype, "urlRestriction", void 0);
    return UserList;
}(SpeakeasyBase));
export { UserList };
