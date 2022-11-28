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
var GetWorkspaceIdMembersMemberIdNotesPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdNotesPathParams, _super);
    function GetWorkspaceIdMembersMemberIdNotesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdNotesPathParams.prototype, "memberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdNotesPathParams.prototype, "workspaceId", void 0);
    return GetWorkspaceIdMembersMemberIdNotesPathParams;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdNotesPathParams };
var GetWorkspaceIdMembersMemberIdNotesQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdNotesQueryParams, _super);
    function GetWorkspaceIdMembersMemberIdNotesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdNotesQueryParams.prototype, "page", void 0);
    return GetWorkspaceIdMembersMemberIdNotesQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdNotesQueryParams };
var GetWorkspaceIdMembersMemberIdNotesSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdNotesSecurity, _super);
    function GetWorkspaceIdMembersMemberIdNotesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], GetWorkspaceIdMembersMemberIdNotesSecurity.prototype, "bearer", void 0);
    return GetWorkspaceIdMembersMemberIdNotesSecurity;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdNotesSecurity };
var GetWorkspaceIdMembersMemberIdNotesRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdNotesRequest, _super);
    function GetWorkspaceIdMembersMemberIdNotesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersMemberIdNotesPathParams)
    ], GetWorkspaceIdMembersMemberIdNotesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersMemberIdNotesQueryParams)
    ], GetWorkspaceIdMembersMemberIdNotesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersMemberIdNotesSecurity)
    ], GetWorkspaceIdMembersMemberIdNotesRequest.prototype, "security", void 0);
    return GetWorkspaceIdMembersMemberIdNotesRequest;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdNotesRequest };
var GetWorkspaceIdMembersMemberIdNotesResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdNotesResponse, _super);
    function GetWorkspaceIdMembersMemberIdNotesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdNotesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceIdMembersMemberIdNotesResponse.prototype, "statusCode", void 0);
    return GetWorkspaceIdMembersMemberIdNotesResponse;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdNotesResponse };
