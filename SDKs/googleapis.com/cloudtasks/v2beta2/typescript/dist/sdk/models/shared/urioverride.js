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
export var UriOverrideSchemeEnum;
(function (UriOverrideSchemeEnum) {
    UriOverrideSchemeEnum["SchemeUnspecified"] = "SCHEME_UNSPECIFIED";
    UriOverrideSchemeEnum["Http"] = "HTTP";
    UriOverrideSchemeEnum["Https"] = "HTTPS";
})(UriOverrideSchemeEnum || (UriOverrideSchemeEnum = {}));
export var UriOverrideUriOverrideEnforceModeEnum;
(function (UriOverrideUriOverrideEnforceModeEnum) {
    UriOverrideUriOverrideEnforceModeEnum["UriOverrideEnforceModeUnspecified"] = "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED";
    UriOverrideUriOverrideEnforceModeEnum["IfNotExists"] = "IF_NOT_EXISTS";
    UriOverrideUriOverrideEnforceModeEnum["Always"] = "ALWAYS";
})(UriOverrideUriOverrideEnforceModeEnum || (UriOverrideUriOverrideEnforceModeEnum = {}));
// UriOverride
/**
 * Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
**/
var UriOverride = /** @class */ (function (_super) {
    __extends(UriOverride, _super);
    function UriOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], UriOverride.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], UriOverride.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], UriOverride.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], UriOverride.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheme" }),
        __metadata("design:type", String)
    ], UriOverride.prototype, "scheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uriOverrideEnforceMode" }),
        __metadata("design:type", String)
    ], UriOverride.prototype, "uriOverrideEnforceMode", void 0);
    return UriOverride;
}(SpeakeasyBase));
export { UriOverride };
