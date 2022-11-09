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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PutWorkspaceIdMembersIdPathParams = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersIdPathParams, _super);
    function PutWorkspaceIdMembersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersIdPathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersIdPathParams.prototype, "workspaceId", void 0);
    return PutWorkspaceIdMembersIdPathParams;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersIdPathParams };
var PutWorkspaceIdMembersIdSecurity = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersIdSecurity, _super);
    function PutWorkspaceIdMembersIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], PutWorkspaceIdMembersIdSecurity.prototype, "bearer", void 0);
    return PutWorkspaceIdMembersIdSecurity;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersIdSecurity };
var PutWorkspaceIdMembersIdRequest = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersIdRequest, _super);
    function PutWorkspaceIdMembersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutWorkspaceIdMembersIdPathParams)
    ], PutWorkspaceIdMembersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Member)
    ], PutWorkspaceIdMembersIdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutWorkspaceIdMembersIdSecurity)
    ], PutWorkspaceIdMembersIdRequest.prototype, "security", void 0);
    return PutWorkspaceIdMembersIdRequest;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersIdRequest };
var PutWorkspaceIdMembersIdResponse = /** @class */ (function (_super) {
    __extends(PutWorkspaceIdMembersIdResponse, _super);
    function PutWorkspaceIdMembersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutWorkspaceIdMembersIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutWorkspaceIdMembersIdResponse.prototype, "statusCode", void 0);
    return PutWorkspaceIdMembersIdResponse;
}(SpeakeasyBase));
export { PutWorkspaceIdMembersIdResponse };
