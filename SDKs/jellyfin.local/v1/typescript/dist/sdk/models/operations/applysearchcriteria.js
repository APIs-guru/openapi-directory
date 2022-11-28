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
var ApplySearchCriteriaPathParams = /** @class */ (function (_super) {
    __extends(ApplySearchCriteriaPathParams, _super);
    function ApplySearchCriteriaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], ApplySearchCriteriaPathParams.prototype, "itemId", void 0);
    return ApplySearchCriteriaPathParams;
}(SpeakeasyBase));
export { ApplySearchCriteriaPathParams };
var ApplySearchCriteriaQueryParams = /** @class */ (function (_super) {
    __extends(ApplySearchCriteriaQueryParams, _super);
    function ApplySearchCriteriaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replaceAllImages" }),
        __metadata("design:type", Boolean)
    ], ApplySearchCriteriaQueryParams.prototype, "replaceAllImages", void 0);
    return ApplySearchCriteriaQueryParams;
}(SpeakeasyBase));
export { ApplySearchCriteriaQueryParams };
var ApplySearchCriteriaRequests = /** @class */ (function (_super) {
    __extends(ApplySearchCriteriaRequests, _super);
    function ApplySearchCriteriaRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.RemoteSearchResult)
    ], ApplySearchCriteriaRequests.prototype, "remoteSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoteSearchResult)
    ], ApplySearchCriteriaRequests.prototype, "remoteSearchResult1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.RemoteSearchResult)
    ], ApplySearchCriteriaRequests.prototype, "remoteSearchResult2", void 0);
    return ApplySearchCriteriaRequests;
}(SpeakeasyBase));
export { ApplySearchCriteriaRequests };
var ApplySearchCriteriaSecurity = /** @class */ (function (_super) {
    __extends(ApplySearchCriteriaSecurity, _super);
    function ApplySearchCriteriaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], ApplySearchCriteriaSecurity.prototype, "customAuthentication", void 0);
    return ApplySearchCriteriaSecurity;
}(SpeakeasyBase));
export { ApplySearchCriteriaSecurity };
var ApplySearchCriteriaRequest = /** @class */ (function (_super) {
    __extends(ApplySearchCriteriaRequest, _super);
    function ApplySearchCriteriaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplySearchCriteriaPathParams)
    ], ApplySearchCriteriaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplySearchCriteriaQueryParams)
    ], ApplySearchCriteriaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplySearchCriteriaRequests)
    ], ApplySearchCriteriaRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplySearchCriteriaSecurity)
    ], ApplySearchCriteriaRequest.prototype, "security", void 0);
    return ApplySearchCriteriaRequest;
}(SpeakeasyBase));
export { ApplySearchCriteriaRequest };
var ApplySearchCriteriaResponse = /** @class */ (function (_super) {
    __extends(ApplySearchCriteriaResponse, _super);
    function ApplySearchCriteriaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApplySearchCriteriaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApplySearchCriteriaResponse.prototype, "statusCode", void 0);
    return ApplySearchCriteriaResponse;
}(SpeakeasyBase));
export { ApplySearchCriteriaResponse };
