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
var GetQueriesIdAnswersPathParams = /** @class */ (function (_super) {
    __extends(GetQueriesIdAnswersPathParams, _super);
    function GetQueriesIdAnswersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetQueriesIdAnswersPathParams.prototype, "id", void 0);
    return GetQueriesIdAnswersPathParams;
}(SpeakeasyBase));
export { GetQueriesIdAnswersPathParams };
var GetQueriesIdAnswersQueryParams = /** @class */ (function (_super) {
    __extends(GetQueriesIdAnswersQueryParams, _super);
    function GetQueriesIdAnswersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", String)
    ], GetQueriesIdAnswersQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetQueriesIdAnswersQueryParams.prototype, "short", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" }),
        __metadata("design:type", Boolean)
    ], GetQueriesIdAnswersQueryParams.prototype, "simplify", void 0);
    return GetQueriesIdAnswersQueryParams;
}(SpeakeasyBase));
export { GetQueriesIdAnswersQueryParams };
var GetQueriesIdAnswersRequest = /** @class */ (function (_super) {
    __extends(GetQueriesIdAnswersRequest, _super);
    function GetQueriesIdAnswersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueriesIdAnswersPathParams)
    ], GetQueriesIdAnswersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueriesIdAnswersQueryParams)
    ], GetQueriesIdAnswersRequest.prototype, "queryParams", void 0);
    return GetQueriesIdAnswersRequest;
}(SpeakeasyBase));
export { GetQueriesIdAnswersRequest };
var GetQueriesIdAnswersResponse = /** @class */ (function (_super) {
    __extends(GetQueriesIdAnswersResponse, _super);
    function GetQueriesIdAnswersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueriesIdAnswersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetQueriesIdAnswersResponse.prototype, "getQueriesIdAnswers200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueriesIdAnswersResponse.prototype, "statusCode", void 0);
    return GetQueriesIdAnswersResponse;
}(SpeakeasyBase));
export { GetQueriesIdAnswersResponse };
