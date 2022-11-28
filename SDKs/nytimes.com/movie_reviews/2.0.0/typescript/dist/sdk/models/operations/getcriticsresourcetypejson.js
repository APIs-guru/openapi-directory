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
var GetCriticsResourceTypeJsonPathParams = /** @class */ (function (_super) {
    __extends(GetCriticsResourceTypeJsonPathParams, _super);
    function GetCriticsResourceTypeJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource-type" }),
        __metadata("design:type", String)
    ], GetCriticsResourceTypeJsonPathParams.prototype, "resourceType", void 0);
    return GetCriticsResourceTypeJsonPathParams;
}(SpeakeasyBase));
export { GetCriticsResourceTypeJsonPathParams };
var GetCriticsResourceTypeJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCriticsResourceTypeJson200ApplicationJson, _super);
    function GetCriticsResourceTypeJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetCriticsResourceTypeJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetCriticsResourceTypeJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Critic }),
        __metadata("design:type", Array)
    ], GetCriticsResourceTypeJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCriticsResourceTypeJson200ApplicationJson.prototype, "status", void 0);
    return GetCriticsResourceTypeJson200ApplicationJson;
}(SpeakeasyBase));
export { GetCriticsResourceTypeJson200ApplicationJson };
var GetCriticsResourceTypeJsonRequest = /** @class */ (function (_super) {
    __extends(GetCriticsResourceTypeJsonRequest, _super);
    function GetCriticsResourceTypeJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCriticsResourceTypeJsonPathParams)
    ], GetCriticsResourceTypeJsonRequest.prototype, "pathParams", void 0);
    return GetCriticsResourceTypeJsonRequest;
}(SpeakeasyBase));
export { GetCriticsResourceTypeJsonRequest };
var GetCriticsResourceTypeJsonResponse = /** @class */ (function (_super) {
    __extends(GetCriticsResourceTypeJsonResponse, _super);
    function GetCriticsResourceTypeJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCriticsResourceTypeJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCriticsResourceTypeJson200ApplicationJson)
    ], GetCriticsResourceTypeJsonResponse.prototype, "getCriticsResourceTypeJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCriticsResourceTypeJsonResponse.prototype, "statusCode", void 0);
    return GetCriticsResourceTypeJsonResponse;
}(SpeakeasyBase));
export { GetCriticsResourceTypeJsonResponse };
