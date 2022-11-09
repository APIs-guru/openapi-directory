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
var AreasGetPathParams = /** @class */ (function (_super) {
    __extends(AreasGetPathParams, _super);
    function AreasGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], AreasGetPathParams.prototype, "version", void 0);
    return AreasGetPathParams;
}(SpeakeasyBase));
export { AreasGetPathParams };
var AreasGetRequest = /** @class */ (function (_super) {
    __extends(AreasGetRequest, _super);
    function AreasGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AreasGetPathParams)
    ], AreasGetRequest.prototype, "pathParams", void 0);
    return AreasGetRequest;
}(SpeakeasyBase));
export { AreasGetRequest };
var AreasGetResponse = /** @class */ (function (_super) {
    __extends(AreasGetResponse, _super);
    function AreasGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AreaResponse)
    ], AreasGetResponse.prototype, "areaResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AreasGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AreasGetResponse.prototype, "statusCode", void 0);
    return AreasGetResponse;
}(SpeakeasyBase));
export { AreasGetResponse };
