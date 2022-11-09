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
var GetInstancesIdMetadataPathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdMetadataPathParams, _super);
    function GetInstancesIdMetadataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdMetadataPathParams.prototype, "id", void 0);
    return GetInstancesIdMetadataPathParams;
}(SpeakeasyBase));
export { GetInstancesIdMetadataPathParams };
var GetInstancesIdMetadataQueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdMetadataQueryParams, _super);
    function GetInstancesIdMetadataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", String)
    ], GetInstancesIdMetadataQueryParams.prototype, "expand", void 0);
    return GetInstancesIdMetadataQueryParams;
}(SpeakeasyBase));
export { GetInstancesIdMetadataQueryParams };
var GetInstancesIdMetadataRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdMetadataRequest, _super);
    function GetInstancesIdMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdMetadataPathParams)
    ], GetInstancesIdMetadataRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdMetadataQueryParams)
    ], GetInstancesIdMetadataRequest.prototype, "queryParams", void 0);
    return GetInstancesIdMetadataRequest;
}(SpeakeasyBase));
export { GetInstancesIdMetadataRequest };
var GetInstancesIdMetadataResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdMetadataResponse, _super);
    function GetInstancesIdMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetInstancesIdMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInstancesIdMetadataResponse.prototype, "getInstancesIdMetadata200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdMetadataResponse.prototype, "statusCode", void 0);
    return GetInstancesIdMetadataResponse;
}(SpeakeasyBase));
export { GetInstancesIdMetadataResponse };
