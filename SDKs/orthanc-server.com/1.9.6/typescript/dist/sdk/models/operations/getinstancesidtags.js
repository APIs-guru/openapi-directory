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
var GetInstancesIdTagsPathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdTagsPathParams, _super);
    function GetInstancesIdTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdTagsPathParams.prototype, "id", void 0);
    return GetInstancesIdTagsPathParams;
}(SpeakeasyBase));
export { GetInstancesIdTagsPathParams };
var GetInstancesIdTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdTagsQueryParams, _super);
    function GetInstancesIdTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore-length" }),
        __metadata("design:type", Array)
    ], GetInstancesIdTagsQueryParams.prototype, "ignoreLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetInstancesIdTagsQueryParams.prototype, "short", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" }),
        __metadata("design:type", Boolean)
    ], GetInstancesIdTagsQueryParams.prototype, "simplify", void 0);
    return GetInstancesIdTagsQueryParams;
}(SpeakeasyBase));
export { GetInstancesIdTagsQueryParams };
var GetInstancesIdTagsRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdTagsRequest, _super);
    function GetInstancesIdTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdTagsPathParams)
    ], GetInstancesIdTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdTagsQueryParams)
    ], GetInstancesIdTagsRequest.prototype, "queryParams", void 0);
    return GetInstancesIdTagsRequest;
}(SpeakeasyBase));
export { GetInstancesIdTagsRequest };
var GetInstancesIdTagsResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdTagsResponse, _super);
    function GetInstancesIdTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetInstancesIdTagsResponse.prototype, "getInstancesIdTags200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdTagsResponse.prototype, "statusCode", void 0);
    return GetInstancesIdTagsResponse;
}(SpeakeasyBase));
export { GetInstancesIdTagsResponse };
