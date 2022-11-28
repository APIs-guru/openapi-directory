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
var PutRealmUsersIdGroupsGroupIdPathParams = /** @class */ (function (_super) {
    __extends(PutRealmUsersIdGroupsGroupIdPathParams, _super);
    function PutRealmUsersIdGroupsGroupIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], PutRealmUsersIdGroupsGroupIdPathParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutRealmUsersIdGroupsGroupIdPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], PutRealmUsersIdGroupsGroupIdPathParams.prototype, "realm", void 0);
    return PutRealmUsersIdGroupsGroupIdPathParams;
}(SpeakeasyBase));
export { PutRealmUsersIdGroupsGroupIdPathParams };
var PutRealmUsersIdGroupsGroupIdRequest = /** @class */ (function (_super) {
    __extends(PutRealmUsersIdGroupsGroupIdRequest, _super);
    function PutRealmUsersIdGroupsGroupIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRealmUsersIdGroupsGroupIdPathParams)
    ], PutRealmUsersIdGroupsGroupIdRequest.prototype, "pathParams", void 0);
    return PutRealmUsersIdGroupsGroupIdRequest;
}(SpeakeasyBase));
export { PutRealmUsersIdGroupsGroupIdRequest };
var PutRealmUsersIdGroupsGroupIdResponse = /** @class */ (function (_super) {
    __extends(PutRealmUsersIdGroupsGroupIdResponse, _super);
    function PutRealmUsersIdGroupsGroupIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutRealmUsersIdGroupsGroupIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutRealmUsersIdGroupsGroupIdResponse.prototype, "statusCode", void 0);
    return PutRealmUsersIdGroupsGroupIdResponse;
}(SpeakeasyBase));
export { PutRealmUsersIdGroupsGroupIdResponse };
