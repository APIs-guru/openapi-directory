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
var GetActionRelatedListQueryParams = /** @class */ (function (_super) {
    __extends(GetActionRelatedListQueryParams, _super);
    function GetActionRelatedListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dataset" }),
        __metadata("design:type", String)
    ], GetActionRelatedListQueryParams.prototype, "dataset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featured" }),
        __metadata("design:type", String)
    ], GetActionRelatedListQueryParams.prototype, "featured", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetActionRelatedListQueryParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetActionRelatedListQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type_filter" }),
        __metadata("design:type", String)
    ], GetActionRelatedListQueryParams.prototype, "typeFilter", void 0);
    return GetActionRelatedListQueryParams;
}(SpeakeasyBase));
export { GetActionRelatedListQueryParams };
var GetActionRelatedListRequest = /** @class */ (function (_super) {
    __extends(GetActionRelatedListRequest, _super);
    function GetActionRelatedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetActionRelatedListQueryParams)
    ], GetActionRelatedListRequest.prototype, "queryParams", void 0);
    return GetActionRelatedListRequest;
}(SpeakeasyBase));
export { GetActionRelatedListRequest };
var GetActionRelatedListResponse = /** @class */ (function (_super) {
    __extends(GetActionRelatedListResponse, _super);
    function GetActionRelatedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetActionRelatedListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetActionRelatedListResponse.prototype, "statusCode", void 0);
    return GetActionRelatedListResponse;
}(SpeakeasyBase));
export { GetActionRelatedListResponse };
