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
import * as shared from "../shared";
var PutWorkspaceIdMembersMemberIdActivitiesIdPathParams = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersMemberIdActivitiesIdPathParams, _super);
    function PutWorkspaceIdMembersMemberIdActivitiesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" }),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdPathParams.prototype, "memberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdPathParams.prototype, "workspaceId", void 0);
    return PutWorkspaceIdMembersMemberIdActivitiesIdPathParams;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersMemberIdActivitiesIdPathParams };
var PutWorkspaceIdMembersMemberIdActivitiesIdSecurity = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersMemberIdActivitiesIdSecurity, _super);
    function PutWorkspaceIdMembersMemberIdActivitiesIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdSecurity.prototype, "bearer", void 0);
    return PutWorkspaceIdMembersMemberIdActivitiesIdSecurity;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersMemberIdActivitiesIdSecurity };
var PutWorkspaceIdMembersMemberIdActivitiesIdRequest = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersMemberIdActivitiesIdRequest, _super);
    function PutWorkspaceIdMembersMemberIdActivitiesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutWorkspaceIdMembersMemberIdActivitiesIdPathParams)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Activity)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutWorkspaceIdMembersMemberIdActivitiesIdSecurity)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdRequest.prototype, "security", void 0);
    return PutWorkspaceIdMembersMemberIdActivitiesIdRequest;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersMemberIdActivitiesIdRequest };
var PutWorkspaceIdMembersMemberIdActivitiesIdResponse = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersMemberIdActivitiesIdResponse, _super);
    function PutWorkspaceIdMembersMemberIdActivitiesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutWorkspaceIdMembersMemberIdActivitiesIdResponse.prototype, "statusCode", void 0);
    return PutWorkspaceIdMembersMemberIdActivitiesIdResponse;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersMemberIdActivitiesIdResponse };
