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
var GetResourcesSourcesJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesSourcesJsonQueryParams, _super);
    function GetResourcesSourcesJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=max" }),
        __metadata("design:type", Number)
    ], GetResourcesSourcesJsonQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=offset" }),
        __metadata("design:type", Number)
    ], GetResourcesSourcesJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", String)
    ], GetResourcesSourcesJsonQueryParams.prototype, "sort", void 0);
    return GetResourcesSourcesJsonQueryParams;
}(SpeakeasyBase));
export { GetResourcesSourcesJsonQueryParams };
var GetResourcesSourcesJsonRequest = /** @class */ (function (_super) {
    __extends(GetResourcesSourcesJsonRequest, _super);
    function GetResourcesSourcesJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourcesSourcesJsonQueryParams)
    ], GetResourcesSourcesJsonRequest.prototype, "queryParams", void 0);
    return GetResourcesSourcesJsonRequest;
}(SpeakeasyBase));
export { GetResourcesSourcesJsonRequest };
var GetResourcesSourcesJsonResponse = /** @class */ (function (_super) {
    __extends(GetResourcesSourcesJsonResponse, _super);
    function GetResourcesSourcesJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResourcesSourcesJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.SourceWrapped }),
        __metadata("design:type", Array)
    ], GetResourcesSourcesJsonResponse.prototype, "sourceWrappeds", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetResourcesSourcesJsonResponse.prototype, "statusCode", void 0);
    return GetResourcesSourcesJsonResponse;
}(SpeakeasyBase));
export { GetResourcesSourcesJsonResponse };
