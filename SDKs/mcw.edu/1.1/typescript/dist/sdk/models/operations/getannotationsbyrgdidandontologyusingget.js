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
var GetAnnotationsByRgdIdAndOntologyUsingGetPathParams = /** @class */ (function (_super) {
    __extends(GetAnnotationsByRgdIdAndOntologyUsingGetPathParams, _super);
    function GetAnnotationsByRgdIdAndOntologyUsingGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ontologyPrefix" }),
        __metadata("design:type", String)
    ], GetAnnotationsByRgdIdAndOntologyUsingGetPathParams.prototype, "ontologyPrefix", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" }),
        __metadata("design:type", Number)
    ], GetAnnotationsByRgdIdAndOntologyUsingGetPathParams.prototype, "rgdId", void 0);
    return GetAnnotationsByRgdIdAndOntologyUsingGetPathParams;
}(SpeakeasyBase));
export { GetAnnotationsByRgdIdAndOntologyUsingGetPathParams };
var GetAnnotationsByRgdIdAndOntologyUsingGetRequest = /** @class */ (function (_super) {
    __extends(GetAnnotationsByRgdIdAndOntologyUsingGetRequest, _super);
    function GetAnnotationsByRgdIdAndOntologyUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAnnotationsByRgdIdAndOntologyUsingGetPathParams)
    ], GetAnnotationsByRgdIdAndOntologyUsingGetRequest.prototype, "pathParams", void 0);
    return GetAnnotationsByRgdIdAndOntologyUsingGetRequest;
}(SpeakeasyBase));
export { GetAnnotationsByRgdIdAndOntologyUsingGetRequest };
var GetAnnotationsByRgdIdAndOntologyUsingGetResponse = /** @class */ (function (_super) {
    __extends(GetAnnotationsByRgdIdAndOntologyUsingGetResponse, _super);
    function GetAnnotationsByRgdIdAndOntologyUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAnnotationsByRgdIdAndOntologyUsingGetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAnnotationsByRgdIdAndOntologyUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAnnotationsByRgdIdAndOntologyUsingGetResponse.prototype, "statusCode", void 0);
    return GetAnnotationsByRgdIdAndOntologyUsingGetResponse;
}(SpeakeasyBase));
export { GetAnnotationsByRgdIdAndOntologyUsingGetResponse };
