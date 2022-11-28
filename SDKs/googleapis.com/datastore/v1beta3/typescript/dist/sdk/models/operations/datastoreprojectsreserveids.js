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
var DatastoreProjectsReserveIdsPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsReserveIdsPathParams, _super);
    function DatastoreProjectsReserveIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsReserveIdsPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsReserveIdsPathParams };
var DatastoreProjectsReserveIdsQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsReserveIdsQueryParams, _super);
    function DatastoreProjectsReserveIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsReserveIdsQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsReserveIdsQueryParams };
var DatastoreProjectsReserveIdsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsReserveIdsSecurityOption1, _super);
    function DatastoreProjectsReserveIdsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsReserveIdsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsReserveIdsSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsReserveIdsSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsReserveIdsSecurityOption1 };
var DatastoreProjectsReserveIdsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsReserveIdsSecurityOption2, _super);
    function DatastoreProjectsReserveIdsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsReserveIdsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsReserveIdsSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsReserveIdsSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsReserveIdsSecurityOption2 };
var DatastoreProjectsReserveIdsSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsReserveIdsSecurity, _super);
    function DatastoreProjectsReserveIdsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsReserveIdsSecurityOption1)
    ], DatastoreProjectsReserveIdsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsReserveIdsSecurityOption2)
    ], DatastoreProjectsReserveIdsSecurity.prototype, "option2", void 0);
    return DatastoreProjectsReserveIdsSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsReserveIdsSecurity };
var DatastoreProjectsReserveIdsRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsReserveIdsRequest, _super);
    function DatastoreProjectsReserveIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsReserveIdsPathParams)
    ], DatastoreProjectsReserveIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsReserveIdsQueryParams)
    ], DatastoreProjectsReserveIdsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReserveIdsRequest)
    ], DatastoreProjectsReserveIdsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsReserveIdsSecurity)
    ], DatastoreProjectsReserveIdsRequest.prototype, "security", void 0);
    return DatastoreProjectsReserveIdsRequest;
}(SpeakeasyBase));
export { DatastoreProjectsReserveIdsRequest };
var DatastoreProjectsReserveIdsResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsReserveIdsResponse, _super);
    function DatastoreProjectsReserveIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsReserveIdsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DatastoreProjectsReserveIdsResponse.prototype, "reserveIdsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsReserveIdsResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsReserveIdsResponse;
}(SpeakeasyBase));
export { DatastoreProjectsReserveIdsResponse };
