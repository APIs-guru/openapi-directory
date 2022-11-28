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
import { CustomEventClickAnnotation } from "./customeventclickannotation";
import { CustomEventImpressionAnnotation } from "./customeventimpressionannotation";
import { CustomVariable } from "./customvariable";
import { CustomEventInsert } from "./customeventinsert";
export var CustomEventEventTypeEnum;
(function (CustomEventEventTypeEnum) {
    CustomEventEventTypeEnum["Unknown"] = "UNKNOWN";
    CustomEventEventTypeEnum["Insert"] = "INSERT";
    CustomEventEventTypeEnum["Annotate"] = "ANNOTATE";
})(CustomEventEventTypeEnum || (CustomEventEventTypeEnum = {}));
// CustomEvent
/**
 * Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
**/
var CustomEvent = /** @class */ (function (_super) {
    __extends(CustomEvent, _super);
    function CustomEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotateClickEvent" }),
        __metadata("design:type", CustomEventClickAnnotation)
    ], CustomEvent.prototype, "annotateClickEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotateImpressionEvent" }),
        __metadata("design:type", CustomEventImpressionAnnotation)
    ], CustomEvent.prototype, "annotateImpressionEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customVariables", elemType: CustomVariable }),
        __metadata("design:type", Array)
    ], CustomEvent.prototype, "customVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], CustomEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigurationId" }),
        __metadata("design:type", String)
    ], CustomEvent.prototype, "floodlightConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertEvent" }),
        __metadata("design:type", CustomEventInsert)
    ], CustomEvent.prototype, "insertEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CustomEvent.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ordinal" }),
        __metadata("design:type", String)
    ], CustomEvent.prototype, "ordinal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampMicros" }),
        __metadata("design:type", String)
    ], CustomEvent.prototype, "timestampMicros", void 0);
    return CustomEvent;
}(SpeakeasyBase));
export { CustomEvent };
