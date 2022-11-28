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
import * as shared from "../shared";
var PostOutlierHeaders = /** @class */ (function (_super) {
    __extends(PostOutlierHeaders, _super);
    function PostOutlierHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], PostOutlierHeaders.prototype, "token", void 0);
    return PostOutlierHeaders;
}(SpeakeasyBase));
export { PostOutlierHeaders };
var PostOutlierRequests = /** @class */ (function (_super) {
    __extends(PostOutlierRequests, _super);
    function PostOutlierRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.OutliersRequest)
    ], PostOutlierRequests.prototype, "outliersRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OutliersRequest)
    ], PostOutlierRequests.prototype, "outliersRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.OutliersRequest)
    ], PostOutlierRequests.prototype, "outliersRequest2", void 0);
    return PostOutlierRequests;
}(SpeakeasyBase));
export { PostOutlierRequests };
var PostOutlierRequest = /** @class */ (function (_super) {
    __extends(PostOutlierRequest, _super);
    function PostOutlierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOutlierHeaders)
    ], PostOutlierRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOutlierRequests)
    ], PostOutlierRequest.prototype, "request", void 0);
    return PostOutlierRequest;
}(SpeakeasyBase));
export { PostOutlierRequest };
var PostOutlierResponse = /** @class */ (function (_super) {
    __extends(PostOutlierResponse, _super);
    function PostOutlierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostOutlierResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostOutlierResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostOutlierResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TimeSeriesOutliersResponse }),
        __metadata("design:type", Array)
    ], PostOutlierResponse.prototype, "timeSeriesOutliersResponses", void 0);
    return PostOutlierResponse;
}(SpeakeasyBase));
export { PostOutlierResponse };
