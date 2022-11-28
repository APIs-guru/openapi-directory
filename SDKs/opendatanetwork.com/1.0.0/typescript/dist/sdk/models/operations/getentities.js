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
var GetEntitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetEntitiesQueryParams, _super);
    function GetEntitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" }),
        __metadata("design:type", String)
    ], GetEntitiesQueryParams.prototype, "appToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" }),
        __metadata("design:type", String)
    ], GetEntitiesQueryParams.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_name" }),
        __metadata("design:type", String)
    ], GetEntitiesQueryParams.prototype, "entityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_type" }),
        __metadata("design:type", String)
    ], GetEntitiesQueryParams.prototype, "entityType", void 0);
    return GetEntitiesQueryParams;
}(SpeakeasyBase));
export { GetEntitiesQueryParams };
var GetEntitiesHeaders = /** @class */ (function (_super) {
    __extends(GetEntitiesHeaders, _super);
    function GetEntitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" }),
        __metadata("design:type", String)
    ], GetEntitiesHeaders.prototype, "xAppToken", void 0);
    return GetEntitiesHeaders;
}(SpeakeasyBase));
export { GetEntitiesHeaders };
var GetEntitiesRequest = /** @class */ (function (_super) {
    __extends(GetEntitiesRequest, _super);
    function GetEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEntitiesQueryParams)
    ], GetEntitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEntitiesHeaders)
    ], GetEntitiesRequest.prototype, "headers", void 0);
    return GetEntitiesRequest;
}(SpeakeasyBase));
export { GetEntitiesRequest };
var GetEntitiesResponse = /** @class */ (function (_super) {
    __extends(GetEntitiesResponse, _super);
    function GetEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEntitiesResponse.prototype, "statusCode", void 0);
    return GetEntitiesResponse;
}(SpeakeasyBase));
export { GetEntitiesResponse };
