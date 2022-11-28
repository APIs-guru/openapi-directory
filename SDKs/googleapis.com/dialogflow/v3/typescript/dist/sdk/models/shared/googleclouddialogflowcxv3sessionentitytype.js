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
import { GoogleCloudDialogflowCxV3EntityTypeEntity } from "./googleclouddialogflowcxv3entitytypeentity";
export var GoogleCloudDialogflowCxV3SessionEntityTypeEntityOverrideModeEnum;
(function (GoogleCloudDialogflowCxV3SessionEntityTypeEntityOverrideModeEnum) {
    GoogleCloudDialogflowCxV3SessionEntityTypeEntityOverrideModeEnum["EntityOverrideModeUnspecified"] = "ENTITY_OVERRIDE_MODE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3SessionEntityTypeEntityOverrideModeEnum["EntityOverrideModeOverride"] = "ENTITY_OVERRIDE_MODE_OVERRIDE";
    GoogleCloudDialogflowCxV3SessionEntityTypeEntityOverrideModeEnum["EntityOverrideModeSupplement"] = "ENTITY_OVERRIDE_MODE_SUPPLEMENT";
})(GoogleCloudDialogflowCxV3SessionEntityTypeEntityOverrideModeEnum || (GoogleCloudDialogflowCxV3SessionEntityTypeEntityOverrideModeEnum = {}));
// GoogleCloudDialogflowCxV3SessionEntityType
/**
 * Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
**/
var GoogleCloudDialogflowCxV3SessionEntityType = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3SessionEntityType, _super);
    function GoogleCloudDialogflowCxV3SessionEntityType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDialogflowCxV3EntityTypeEntity }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3SessionEntityType.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityOverrideMode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3SessionEntityType.prototype, "entityOverrideMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3SessionEntityType.prototype, "name", void 0);
    return GoogleCloudDialogflowCxV3SessionEntityType;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3SessionEntityType };
