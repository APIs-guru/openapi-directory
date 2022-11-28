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
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";
export var GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum;
(function (GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum) {
    GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum["EntityOverrideModeUnspecified"] = "ENTITY_OVERRIDE_MODE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum["EntityOverrideModeOverride"] = "ENTITY_OVERRIDE_MODE_OVERRIDE";
    GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum["EntityOverrideModeSupplement"] = "ENTITY_OVERRIDE_MODE_SUPPLEMENT";
})(GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum || (GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum = {}));
// GoogleCloudDialogflowV2beta1SessionEntityType
/**
 * A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
**/
var GoogleCloudDialogflowV2beta1SessionEntityType = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1SessionEntityType, _super);
    function GoogleCloudDialogflowV2beta1SessionEntityType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDialogflowV2beta1EntityTypeEntity }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1SessionEntityType.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityOverrideMode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1SessionEntityType.prototype, "entityOverrideMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1SessionEntityType.prototype, "name", void 0);
    return GoogleCloudDialogflowV2beta1SessionEntityType;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1SessionEntityType };
