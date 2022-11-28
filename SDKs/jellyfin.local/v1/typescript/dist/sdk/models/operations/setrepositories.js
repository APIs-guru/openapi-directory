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
var SetRepositoriesRequests = /** @class */ (function (_super) {
    __extends(SetRepositoriesRequests, _super);
    function SetRepositoriesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.RepositoryInfo }),
        __metadata("design:type", Array)
    ], SetRepositoriesRequests.prototype, "repositoryInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.RepositoryInfo }),
        __metadata("design:type", Array)
    ], SetRepositoriesRequests.prototype, "repositoryInfos1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.RepositoryInfo }),
        __metadata("design:type", Array)
    ], SetRepositoriesRequests.prototype, "repositoryInfos2", void 0);
    return SetRepositoriesRequests;
}(SpeakeasyBase));
export { SetRepositoriesRequests };
var SetRepositoriesSecurity = /** @class */ (function (_super) {
    __extends(SetRepositoriesSecurity, _super);
    function SetRepositoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SetRepositoriesSecurity.prototype, "customAuthentication", void 0);
    return SetRepositoriesSecurity;
}(SpeakeasyBase));
export { SetRepositoriesSecurity };
var SetRepositoriesRequest = /** @class */ (function (_super) {
    __extends(SetRepositoriesRequest, _super);
    function SetRepositoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetRepositoriesRequests)
    ], SetRepositoriesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetRepositoriesSecurity)
    ], SetRepositoriesRequest.prototype, "security", void 0);
    return SetRepositoriesRequest;
}(SpeakeasyBase));
export { SetRepositoriesRequest };
var SetRepositoriesResponse = /** @class */ (function (_super) {
    __extends(SetRepositoriesResponse, _super);
    function SetRepositoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetRepositoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetRepositoriesResponse.prototype, "statusCode", void 0);
    return SetRepositoriesResponse;
}(SpeakeasyBase));
export { SetRepositoriesResponse };
