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
var DeleteInstancesIdMetadataNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteInstancesIdMetadataNamePathParams, _super);
    function DeleteInstancesIdMetadataNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteInstancesIdMetadataNamePathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DeleteInstancesIdMetadataNamePathParams.prototype, "name", void 0);
    return DeleteInstancesIdMetadataNamePathParams;
}(SpeakeasyBase));
export { DeleteInstancesIdMetadataNamePathParams };
var DeleteInstancesIdMetadataNameHeaders = /** @class */ (function (_super) {
    __extends(DeleteInstancesIdMetadataNameHeaders, _super);
    function DeleteInstancesIdMetadataNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], DeleteInstancesIdMetadataNameHeaders.prototype, "ifMatch", void 0);
    return DeleteInstancesIdMetadataNameHeaders;
}(SpeakeasyBase));
export { DeleteInstancesIdMetadataNameHeaders };
var DeleteInstancesIdMetadataNameRequest = /** @class */ (function (_super) {
    __extends(DeleteInstancesIdMetadataNameRequest, _super);
    function DeleteInstancesIdMetadataNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteInstancesIdMetadataNamePathParams)
    ], DeleteInstancesIdMetadataNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteInstancesIdMetadataNameHeaders)
    ], DeleteInstancesIdMetadataNameRequest.prototype, "headers", void 0);
    return DeleteInstancesIdMetadataNameRequest;
}(SpeakeasyBase));
export { DeleteInstancesIdMetadataNameRequest };
var DeleteInstancesIdMetadataNameResponse = /** @class */ (function (_super) {
    __extends(DeleteInstancesIdMetadataNameResponse, _super);
    function DeleteInstancesIdMetadataNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteInstancesIdMetadataNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteInstancesIdMetadataNameResponse.prototype, "statusCode", void 0);
    return DeleteInstancesIdMetadataNameResponse;
}(SpeakeasyBase));
export { DeleteInstancesIdMetadataNameResponse };
