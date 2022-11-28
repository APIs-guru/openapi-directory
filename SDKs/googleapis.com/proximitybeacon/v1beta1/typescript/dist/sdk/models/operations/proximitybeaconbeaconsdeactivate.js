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
var ProximitybeaconBeaconsDeactivatePathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeactivatePathParams, _super);
    function ProximitybeaconBeaconsDeactivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beaconName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivatePathParams.prototype, "beaconName", void 0);
    return ProximitybeaconBeaconsDeactivatePathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeactivatePathParams };
var ProximitybeaconBeaconsDeactivateQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeactivateQueryParams, _super);
    function ProximitybeaconBeaconsDeactivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsDeactivateQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeactivateQueryParams };
var ProximitybeaconBeaconsDeactivateSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeactivateSecurity, _super);
    function ProximitybeaconBeaconsDeactivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsDeactivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsDeactivateSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsDeactivateSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeactivateSecurity };
var ProximitybeaconBeaconsDeactivateRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeactivateRequest, _super);
    function ProximitybeaconBeaconsDeactivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDeactivatePathParams)
    ], ProximitybeaconBeaconsDeactivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDeactivateQueryParams)
    ], ProximitybeaconBeaconsDeactivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProximitybeaconBeaconsDeactivateSecurity)
    ], ProximitybeaconBeaconsDeactivateRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsDeactivateRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeactivateRequest };
var ProximitybeaconBeaconsDeactivateResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDeactivateResponse, _super);
    function ProximitybeaconBeaconsDeactivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDeactivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProximitybeaconBeaconsDeactivateResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsDeactivateResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsDeactivateResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDeactivateResponse };
