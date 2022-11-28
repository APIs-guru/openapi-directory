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
var PubsubliteAdminProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsOperationsCancelPathParams, _super);
    function PubsubliteAdminProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return PubsubliteAdminProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsOperationsCancelPathParams };
var PubsubliteAdminProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsOperationsCancelQueryParams, _super);
    function PubsubliteAdminProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteAdminProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsOperationsCancelQueryParams };
var PubsubliteAdminProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsOperationsCancelSecurity, _super);
    function PubsubliteAdminProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteAdminProjectsLocationsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteAdminProjectsLocationsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return PubsubliteAdminProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsOperationsCancelSecurity };
var PubsubliteAdminProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsOperationsCancelRequest, _super);
    function PubsubliteAdminProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsOperationsCancelPathParams)
    ], PubsubliteAdminProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsOperationsCancelQueryParams)
    ], PubsubliteAdminProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PubsubliteAdminProjectsLocationsOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsOperationsCancelSecurity)
    ], PubsubliteAdminProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return PubsubliteAdminProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsOperationsCancelRequest };
var PubsubliteAdminProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsOperationsCancelResponse, _super);
    function PubsubliteAdminProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubliteAdminProjectsLocationsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteAdminProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return PubsubliteAdminProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsOperationsCancelResponse };
