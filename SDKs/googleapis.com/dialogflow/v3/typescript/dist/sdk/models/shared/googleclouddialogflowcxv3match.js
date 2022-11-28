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
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
export var GoogleCloudDialogflowCxV3MatchMatchTypeEnum;
(function (GoogleCloudDialogflowCxV3MatchMatchTypeEnum) {
    GoogleCloudDialogflowCxV3MatchMatchTypeEnum["MatchTypeUnspecified"] = "MATCH_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3MatchMatchTypeEnum["Intent"] = "INTENT";
    GoogleCloudDialogflowCxV3MatchMatchTypeEnum["DirectIntent"] = "DIRECT_INTENT";
    GoogleCloudDialogflowCxV3MatchMatchTypeEnum["ParameterFilling"] = "PARAMETER_FILLING";
    GoogleCloudDialogflowCxV3MatchMatchTypeEnum["NoMatch"] = "NO_MATCH";
    GoogleCloudDialogflowCxV3MatchMatchTypeEnum["NoInput"] = "NO_INPUT";
    GoogleCloudDialogflowCxV3MatchMatchTypeEnum["Event"] = "EVENT";
})(GoogleCloudDialogflowCxV3MatchMatchTypeEnum || (GoogleCloudDialogflowCxV3MatchMatchTypeEnum = {}));
// GoogleCloudDialogflowCxV3Match
/**
 * Represents one match result of MatchIntent.
**/
var GoogleCloudDialogflowCxV3Match = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3Match, _super);
    function GoogleCloudDialogflowCxV3Match() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3Match.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Match.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Intent)
    ], GoogleCloudDialogflowCxV3Match.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Match.prototype, "matchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3Match.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedInput" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Match.prototype, "resolvedInput", void 0);
    return GoogleCloudDialogflowCxV3Match;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3Match };
