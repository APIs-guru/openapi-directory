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
var ProximitybeaconNamespacesUpdatePathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconNamespacesUpdatePathParams, _super);
    function ProximitybeaconNamespacesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=namespaceName" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdatePathParams.prototype, "namespaceName", void 0);
    return ProximitybeaconNamespacesUpdatePathParams;
}(SpeakeasyBase));
export { ProximitybeaconNamespacesUpdatePathParams };
var ProximitybeaconNamespacesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconNamespacesUpdateQueryParams, _super);
    function ProximitybeaconNamespacesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconNamespacesUpdateQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconNamespacesUpdateQueryParams };
var ProximitybeaconNamespacesUpdateSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconNamespacesUpdateSecurity, _super);
    function ProximitybeaconNamespacesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconNamespacesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconNamespacesUpdateSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconNamespacesUpdateSecurity;
}(SpeakeasyBase));
export { ProximitybeaconNamespacesUpdateSecurity };
var ProximitybeaconNamespacesUpdateRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconNamespacesUpdateRequest, _super);
    function ProximitybeaconNamespacesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconNamespacesUpdatePathParams)
    ], ProximitybeaconNamespacesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconNamespacesUpdateQueryParams)
    ], ProximitybeaconNamespacesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Namespace)
    ], ProximitybeaconNamespacesUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconNamespacesUpdateSecurity)
    ], ProximitybeaconNamespacesUpdateRequest.prototype, "security", void 0);
    return ProximitybeaconNamespacesUpdateRequest;
}(SpeakeasyBase));
export { ProximitybeaconNamespacesUpdateRequest };
var ProximitybeaconNamespacesUpdateResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconNamespacesUpdateResponse, _super);
    function ProximitybeaconNamespacesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProximitybeaconNamespacesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Namespace)
    ], ProximitybeaconNamespacesUpdateResponse.prototype, "namespace", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconNamespacesUpdateResponse.prototype, "statusCode", void 0);
    return ProximitybeaconNamespacesUpdateResponse;
}(SpeakeasyBase));
export { ProximitybeaconNamespacesUpdateResponse };
