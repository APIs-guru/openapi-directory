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
var LoadServiceRequestBody = /** @class */ (function (_super) {
    __extends(LoadServiceRequestBody, _super);
    function LoadServiceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_description_url" }),
        __metadata("design:type", String)
    ], LoadServiceRequestBody.prototype, "serviceDescriptionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_moniker" }),
        __metadata("design:type", String)
    ], LoadServiceRequestBody.prototype, "serviceMoniker", void 0);
    return LoadServiceRequestBody;
}(SpeakeasyBase));
export { LoadServiceRequestBody };
export var LoadService200ApplicationJsonStatusEnum;
(function (LoadService200ApplicationJsonStatusEnum) {
    LoadService200ApplicationJsonStatusEnum["Success"] = "success";
})(LoadService200ApplicationJsonStatusEnum || (LoadService200ApplicationJsonStatusEnum = {}));
var LoadService200ApplicationJson = /** @class */ (function (_super) {
    __extends(LoadService200ApplicationJson, _super);
    function LoadService200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", String)
    ], LoadService200ApplicationJson.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], LoadService200ApplicationJson.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], LoadService200ApplicationJson.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LoadService200ApplicationJson.prototype, "status", void 0);
    return LoadService200ApplicationJson;
}(SpeakeasyBase));
export { LoadService200ApplicationJson };
var LoadServiceRequest = /** @class */ (function (_super) {
    __extends(LoadServiceRequest, _super);
    function LoadServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LoadServiceRequestBody)
    ], LoadServiceRequest.prototype, "request", void 0);
    return LoadServiceRequest;
}(SpeakeasyBase));
export { LoadServiceRequest };
var LoadServiceResponse = /** @class */ (function (_super) {
    __extends(LoadServiceResponse, _super);
    function LoadServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoadServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], LoadServiceResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoadServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoadService200ApplicationJson)
    ], LoadServiceResponse.prototype, "loadService200ApplicationJsonObject", void 0);
    return LoadServiceResponse;
}(SpeakeasyBase));
export { LoadServiceResponse };
