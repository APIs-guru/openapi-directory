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
var GetQueriesIdQueryPathParams = /** @class */ (function (_super) {
    __extends(GetQueriesIdQueryPathParams, _super);
    function GetQueriesIdQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetQueriesIdQueryPathParams.prototype, "id", void 0);
    return GetQueriesIdQueryPathParams;
}(SpeakeasyBase));
export { GetQueriesIdQueryPathParams };
var GetQueriesIdQueryQueryParams = /** @class */ (function (_super) {
    __extends(GetQueriesIdQueryQueryParams, _super);
    function GetQueriesIdQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetQueriesIdQueryQueryParams.prototype, "short", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=simplify" }),
        __metadata("design:type", Boolean)
    ], GetQueriesIdQueryQueryParams.prototype, "simplify", void 0);
    return GetQueriesIdQueryQueryParams;
}(SpeakeasyBase));
export { GetQueriesIdQueryQueryParams };
var GetQueriesIdQueryRequest = /** @class */ (function (_super) {
    __extends(GetQueriesIdQueryRequest, _super);
    function GetQueriesIdQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetQueriesIdQueryPathParams)
    ], GetQueriesIdQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetQueriesIdQueryQueryParams)
    ], GetQueriesIdQueryRequest.prototype, "queryParams", void 0);
    return GetQueriesIdQueryRequest;
}(SpeakeasyBase));
export { GetQueriesIdQueryRequest };
var GetQueriesIdQueryResponse = /** @class */ (function (_super) {
    __extends(GetQueriesIdQueryResponse, _super);
    function GetQueriesIdQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetQueriesIdQueryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetQueriesIdQueryResponse.prototype, "getQueriesIdQuery200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetQueriesIdQueryResponse.prototype, "statusCode", void 0);
    return GetQueriesIdQueryResponse;
}(SpeakeasyBase));
export { GetQueriesIdQueryResponse };
