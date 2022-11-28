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
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
export var GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum;
(function (GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum) {
    GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum["MatchTypeUnspecified"] = "MATCH_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum["Intent"] = "INTENT";
    GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum["DirectIntent"] = "DIRECT_INTENT";
    GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum["ParameterFilling"] = "PARAMETER_FILLING";
    GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum["NoMatch"] = "NO_MATCH";
    GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum["NoInput"] = "NO_INPUT";
    GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum["Event"] = "EVENT";
})(GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum || (GoogleCloudDialogflowCxV3beta1MatchMatchTypeEnum = {}));
// GoogleCloudDialogflowCxV3beta1Match
/**
 * Represents one match result of MatchIntent.
**/
var GoogleCloudDialogflowCxV3beta1Match = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1Match, _super);
    function GoogleCloudDialogflowCxV3beta1Match() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3beta1Match.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Match.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1Intent)
    ], GoogleCloudDialogflowCxV3beta1Match.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Match.prototype, "matchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1Match.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedInput" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Match.prototype, "resolvedInput", void 0);
    return GoogleCloudDialogflowCxV3beta1Match;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1Match };
