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
var DatastoreProjectsAllocateIdsPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsAllocateIdsPathParams, _super);
    function DatastoreProjectsAllocateIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsAllocateIdsPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsAllocateIdsPathParams };
var DatastoreProjectsAllocateIdsQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsAllocateIdsQueryParams, _super);
    function DatastoreProjectsAllocateIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsAllocateIdsQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsAllocateIdsQueryParams };
var DatastoreProjectsAllocateIdsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsAllocateIdsSecurityOption1, _super);
    function DatastoreProjectsAllocateIdsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsAllocateIdsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsAllocateIdsSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsAllocateIdsSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsAllocateIdsSecurityOption1 };
var DatastoreProjectsAllocateIdsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsAllocateIdsSecurityOption2, _super);
    function DatastoreProjectsAllocateIdsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsAllocateIdsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsAllocateIdsSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsAllocateIdsSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsAllocateIdsSecurityOption2 };
var DatastoreProjectsAllocateIdsSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsAllocateIdsSecurity, _super);
    function DatastoreProjectsAllocateIdsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsAllocateIdsSecurityOption1)
    ], DatastoreProjectsAllocateIdsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsAllocateIdsSecurityOption2)
    ], DatastoreProjectsAllocateIdsSecurity.prototype, "option2", void 0);
    return DatastoreProjectsAllocateIdsSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsAllocateIdsSecurity };
var DatastoreProjectsAllocateIdsRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsAllocateIdsRequest, _super);
    function DatastoreProjectsAllocateIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsAllocateIdsPathParams)
    ], DatastoreProjectsAllocateIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsAllocateIdsQueryParams)
    ], DatastoreProjectsAllocateIdsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AllocateIdsRequest)
    ], DatastoreProjectsAllocateIdsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsAllocateIdsSecurity)
    ], DatastoreProjectsAllocateIdsRequest.prototype, "security", void 0);
    return DatastoreProjectsAllocateIdsRequest;
}(SpeakeasyBase));
export { DatastoreProjectsAllocateIdsRequest };
var DatastoreProjectsAllocateIdsResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsAllocateIdsResponse, _super);
    function DatastoreProjectsAllocateIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AllocateIdsResponse)
    ], DatastoreProjectsAllocateIdsResponse.prototype, "allocateIdsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsAllocateIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsAllocateIdsResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsAllocateIdsResponse;
}(SpeakeasyBase));
export { DatastoreProjectsAllocateIdsResponse };
