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
var GetWorkspaceIdMembersFindPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersFindPathParams, _super);
    function GetWorkspaceIdMembersFindPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersFindPathParams.prototype, "workspaceId", void 0);
    return GetWorkspaceIdMembersFindPathParams;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersFindPathParams };
var GetWorkspaceIdMembersFindQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersFindQueryParams, _super);
    function GetWorkspaceIdMembersFindQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersFindQueryParams.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=github" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersFindQueryParams.prototype, "github", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersFindQueryParams.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=source_host" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersFindQueryParams.prototype, "sourceHost", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uid" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersFindQueryParams.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersFindQueryParams.prototype, "username", void 0);
    return GetWorkspaceIdMembersFindQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersFindQueryParams };
var GetWorkspaceIdMembersFindSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersFindSecurity, _super);
    function GetWorkspaceIdMembersFindSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], GetWorkspaceIdMembersFindSecurity.prototype, "bearer", void 0);
    return GetWorkspaceIdMembersFindSecurity;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersFindSecurity };
var GetWorkspaceIdMembersFindRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersFindRequest, _super);
    function GetWorkspaceIdMembersFindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspaceIdMembersFindPathParams)
    ], GetWorkspaceIdMembersFindRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspaceIdMembersFindQueryParams)
    ], GetWorkspaceIdMembersFindRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspaceIdMembersFindSecurity)
    ], GetWorkspaceIdMembersFindRequest.prototype, "security", void 0);
    return GetWorkspaceIdMembersFindRequest;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersFindRequest };
var GetWorkspaceIdMembersFindResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersFindResponse, _super);
    function GetWorkspaceIdMembersFindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersFindResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceIdMembersFindResponse.prototype, "statusCode", void 0);
    return GetWorkspaceIdMembersFindResponse;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersFindResponse };
