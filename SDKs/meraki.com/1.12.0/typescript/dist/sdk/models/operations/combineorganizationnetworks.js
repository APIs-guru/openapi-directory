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
var CombineOrganizationNetworksPathParams = /** @class */ (function (_super) {
    __extends(CombineOrganizationNetworksPathParams, _super);
    function CombineOrganizationNetworksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CombineOrganizationNetworksPathParams.prototype, "organizationId", void 0);
    return CombineOrganizationNetworksPathParams;
}(SpeakeasyBase));
export { CombineOrganizationNetworksPathParams };
var CombineOrganizationNetworksRequestBody = /** @class */ (function (_super) {
    __extends(CombineOrganizationNetworksRequestBody, _super);
    function CombineOrganizationNetworksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enrollmentString" }),
        __metadata("design:type", String)
    ], CombineOrganizationNetworksRequestBody.prototype, "enrollmentString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CombineOrganizationNetworksRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkIds" }),
        __metadata("design:type", Array)
    ], CombineOrganizationNetworksRequestBody.prototype, "networkIds", void 0);
    return CombineOrganizationNetworksRequestBody;
}(SpeakeasyBase));
export { CombineOrganizationNetworksRequestBody };
var CombineOrganizationNetworksRequest = /** @class */ (function (_super) {
    __extends(CombineOrganizationNetworksRequest, _super);
    function CombineOrganizationNetworksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CombineOrganizationNetworksPathParams)
    ], CombineOrganizationNetworksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CombineOrganizationNetworksRequestBody)
    ], CombineOrganizationNetworksRequest.prototype, "request", void 0);
    return CombineOrganizationNetworksRequest;
}(SpeakeasyBase));
export { CombineOrganizationNetworksRequest };
var CombineOrganizationNetworksResponse = /** @class */ (function (_super) {
    __extends(CombineOrganizationNetworksResponse, _super);
    function CombineOrganizationNetworksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CombineOrganizationNetworksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CombineOrganizationNetworksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CombineOrganizationNetworksResponse.prototype, "combineOrganizationNetworks200ApplicationJsonObject", void 0);
    return CombineOrganizationNetworksResponse;
}(SpeakeasyBase));
export { CombineOrganizationNetworksResponse };
