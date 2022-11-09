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
var PostQueriesIdAnswersIndexQueryStudiesPathParams = /** @class */ (function (_super) {
    __extends(PostQueriesIdAnswersIndexQueryStudiesPathParams, _super);
    function PostQueriesIdAnswersIndexQueryStudiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostQueriesIdAnswersIndexQueryStudiesPathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=index" }),
        __metadata("design:type", String)
    ], PostQueriesIdAnswersIndexQueryStudiesPathParams.prototype, "index", void 0);
    return PostQueriesIdAnswersIndexQueryStudiesPathParams;
}(SpeakeasyBase));
export { PostQueriesIdAnswersIndexQueryStudiesPathParams };
var PostQueriesIdAnswersIndexQueryStudiesRequest = /** @class */ (function (_super) {
    __extends(PostQueriesIdAnswersIndexQueryStudiesRequest, _super);
    function PostQueriesIdAnswersIndexQueryStudiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostQueriesIdAnswersIndexQueryStudiesPathParams)
    ], PostQueriesIdAnswersIndexQueryStudiesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostQueriesIdAnswersIndexQueryStudiesRequest.prototype, "request", void 0);
    return PostQueriesIdAnswersIndexQueryStudiesRequest;
}(SpeakeasyBase));
export { PostQueriesIdAnswersIndexQueryStudiesRequest };
var PostQueriesIdAnswersIndexQueryStudiesResponse = /** @class */ (function (_super) {
    __extends(PostQueriesIdAnswersIndexQueryStudiesResponse, _super);
    function PostQueriesIdAnswersIndexQueryStudiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostQueriesIdAnswersIndexQueryStudiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostQueriesIdAnswersIndexQueryStudiesResponse.prototype, "postQueriesIdAnswersIndexQueryStudies200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostQueriesIdAnswersIndexQueryStudiesResponse.prototype, "statusCode", void 0);
    return PostQueriesIdAnswersIndexQueryStudiesResponse;
}(SpeakeasyBase));
export { PostQueriesIdAnswersIndexQueryStudiesResponse };
