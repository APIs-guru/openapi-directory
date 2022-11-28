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
var TfaDisableSecurity = /** @class */ (function (_super) {
    __extends(TfaDisableSecurity, _super);
    function TfaDisableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], TfaDisableSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], TfaDisableSecurity.prototype, "oauth", void 0);
    return TfaDisableSecurity;
}(SpeakeasyBase));
export { TfaDisableSecurity };
var TfaDisableDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(TfaDisableDefaultApplicationJson, _super);
    function TfaDisableDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], TfaDisableDefaultApplicationJson.prototype, "errors", void 0);
    return TfaDisableDefaultApplicationJson;
}(SpeakeasyBase));
export { TfaDisableDefaultApplicationJson };
var TfaDisableRequest = /** @class */ (function (_super) {
    __extends(TfaDisableRequest, _super);
    function TfaDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TfaDisableSecurity)
    ], TfaDisableRequest.prototype, "security", void 0);
    return TfaDisableRequest;
}(SpeakeasyBase));
export { TfaDisableRequest };
var TfaDisableResponse = /** @class */ (function (_super) {
    __extends(TfaDisableResponse, _super);
    function TfaDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TfaDisableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TfaDisableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TfaDisableResponse.prototype, "tfaDisable200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TfaDisableDefaultApplicationJson)
    ], TfaDisableResponse.prototype, "tfaDisableDefaultApplicationJsonObject", void 0);
    return TfaDisableResponse;
}(SpeakeasyBase));
export { TfaDisableResponse };
