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
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";
export var GoogleAppsDriveLabelsV2betaLifecycleStateEnum;
(function (GoogleAppsDriveLabelsV2betaLifecycleStateEnum) {
    GoogleAppsDriveLabelsV2betaLifecycleStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleAppsDriveLabelsV2betaLifecycleStateEnum["UnpublishedDraft"] = "UNPUBLISHED_DRAFT";
    GoogleAppsDriveLabelsV2betaLifecycleStateEnum["Published"] = "PUBLISHED";
    GoogleAppsDriveLabelsV2betaLifecycleStateEnum["Disabled"] = "DISABLED";
    GoogleAppsDriveLabelsV2betaLifecycleStateEnum["Deleted"] = "DELETED";
})(GoogleAppsDriveLabelsV2betaLifecycleStateEnum || (GoogleAppsDriveLabelsV2betaLifecycleStateEnum = {}));
// GoogleAppsDriveLabelsV2betaLifecycle
/**
 * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
**/
var GoogleAppsDriveLabelsV2betaLifecycle = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaLifecycle, _super);
    function GoogleAppsDriveLabelsV2betaLifecycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledPolicy" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy)
    ], GoogleAppsDriveLabelsV2betaLifecycle.prototype, "disabledPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasUnpublishedChanges" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsDriveLabelsV2betaLifecycle.prototype, "hasUnpublishedChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaLifecycle.prototype, "state", void 0);
    return GoogleAppsDriveLabelsV2betaLifecycle;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaLifecycle };
// GoogleAppsDriveLabelsV2betaLifecycleInput
/**
 * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
**/
var GoogleAppsDriveLabelsV2betaLifecycleInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaLifecycleInput, _super);
    function GoogleAppsDriveLabelsV2betaLifecycleInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledPolicy" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy)
    ], GoogleAppsDriveLabelsV2betaLifecycleInput.prototype, "disabledPolicy", void 0);
    return GoogleAppsDriveLabelsV2betaLifecycleInput;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaLifecycleInput };
