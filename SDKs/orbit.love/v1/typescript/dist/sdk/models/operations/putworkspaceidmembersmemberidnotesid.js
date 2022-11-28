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
var PutWorkspaceIdMembersMemberIdNotesIdPathParams = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersMemberIdNotesIdPathParams, _super);
    function PutWorkspaceIdMembersMemberIdNotesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersMemberIdNotesIdPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" }),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersMemberIdNotesIdPathParams.prototype, "memberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersMemberIdNotesIdPathParams.prototype, "workspaceId", void 0);
    return PutWorkspaceIdMembersMemberIdNotesIdPathParams;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersMemberIdNotesIdPathParams };
var PutWorkspaceIdMembersMemberIdNotesIdSecurity = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersMemberIdNotesIdSecurity, _super);
    function PutWorkspaceIdMembersMemberIdNotesIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], PutWorkspaceIdMembersMemberIdNotesIdSecurity.prototype, "bearer", void 0);
    return PutWorkspaceIdMembersMemberIdNotesIdSecurity;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersMemberIdNotesIdSecurity };
var PutWorkspaceIdMembersMemberIdNotesIdRequest = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersMemberIdNotesIdRequest, _super);
    function PutWorkspaceIdMembersMemberIdNotesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutWorkspaceIdMembersMemberIdNotesIdPathParams)
    ], PutWorkspaceIdMembersMemberIdNotesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Note)
    ], PutWorkspaceIdMembersMemberIdNotesIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutWorkspaceIdMembersMemberIdNotesIdSecurity)
    ], PutWorkspaceIdMembersMemberIdNotesIdRequest.prototype, "security", void 0);
    return PutWorkspaceIdMembersMemberIdNotesIdRequest;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersMemberIdNotesIdRequest };
var PutWorkspaceIdMembersMemberIdNotesIdResponse = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersMemberIdNotesIdResponse, _super);
    function PutWorkspaceIdMembersMemberIdNotesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersMemberIdNotesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutWorkspaceIdMembersMemberIdNotesIdResponse.prototype, "statusCode", void 0);
    return PutWorkspaceIdMembersMemberIdNotesIdResponse;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersMemberIdNotesIdResponse };
