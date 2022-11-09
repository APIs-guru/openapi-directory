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
var GetPatientsIdMetadataPathParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdMetadataPathParams, _super);
    function GetPatientsIdMetadataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPatientsIdMetadataPathParams.prototype, "id", void 0);
    return GetPatientsIdMetadataPathParams;
}(SpeakeasyBase));
export { GetPatientsIdMetadataPathParams };
var GetPatientsIdMetadataQueryParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdMetadataQueryParams, _super);
    function GetPatientsIdMetadataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", String)
    ], GetPatientsIdMetadataQueryParams.prototype, "expand", void 0);
    return GetPatientsIdMetadataQueryParams;
}(SpeakeasyBase));
export { GetPatientsIdMetadataQueryParams };
var GetPatientsIdMetadataRequest = /** @class */ (function (_super) {
    __extends(GetPatientsIdMetadataRequest, _super);
    function GetPatientsIdMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPatientsIdMetadataPathParams)
    ], GetPatientsIdMetadataRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPatientsIdMetadataQueryParams)
    ], GetPatientsIdMetadataRequest.prototype, "queryParams", void 0);
    return GetPatientsIdMetadataRequest;
}(SpeakeasyBase));
export { GetPatientsIdMetadataRequest };
var GetPatientsIdMetadataResponse = /** @class */ (function (_super) {
    __extends(GetPatientsIdMetadataResponse, _super);
    function GetPatientsIdMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPatientsIdMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetPatientsIdMetadataResponse.prototype, "getPatientsIdMetadata200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPatientsIdMetadataResponse.prototype, "statusCode", void 0);
    return GetPatientsIdMetadataResponse;
}(SpeakeasyBase));
export { GetPatientsIdMetadataResponse };
