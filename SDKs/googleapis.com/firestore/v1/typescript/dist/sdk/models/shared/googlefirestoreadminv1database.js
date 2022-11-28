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
export var GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;
(function (GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum) {
    GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum["AppEngineIntegrationModeUnspecified"] = "APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED";
    GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum["Enabled"] = "ENABLED";
    GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum["Disabled"] = "DISABLED";
})(GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum || (GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum = {}));
export var GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;
(function (GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum) {
    GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum["ConcurrencyModeUnspecified"] = "CONCURRENCY_MODE_UNSPECIFIED";
    GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum["Optimistic"] = "OPTIMISTIC";
    GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum["Pessimistic"] = "PESSIMISTIC";
    GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum["OptimisticWithEntityGroups"] = "OPTIMISTIC_WITH_ENTITY_GROUPS";
})(GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum || (GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum = {}));
export var GoogleFirestoreAdminV1DatabaseTypeEnum;
(function (GoogleFirestoreAdminV1DatabaseTypeEnum) {
    GoogleFirestoreAdminV1DatabaseTypeEnum["DatabaseTypeUnspecified"] = "DATABASE_TYPE_UNSPECIFIED";
    GoogleFirestoreAdminV1DatabaseTypeEnum["FirestoreNative"] = "FIRESTORE_NATIVE";
    GoogleFirestoreAdminV1DatabaseTypeEnum["DatastoreMode"] = "DATASTORE_MODE";
})(GoogleFirestoreAdminV1DatabaseTypeEnum || (GoogleFirestoreAdminV1DatabaseTypeEnum = {}));
// GoogleFirestoreAdminV1Database
/**
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
**/
var GoogleFirestoreAdminV1Database = /** @class */ (function (_super) {
    __extends(GoogleFirestoreAdminV1Database, _super);
    function GoogleFirestoreAdminV1Database() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineIntegrationMode" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Database.prototype, "appEngineIntegrationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concurrencyMode" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Database.prototype, "concurrencyMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Database.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyPrefix" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Database.prototype, "keyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Database.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Database.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Database.prototype, "type", void 0);
    return GoogleFirestoreAdminV1Database;
}(SpeakeasyBase));
export { GoogleFirestoreAdminV1Database };
// GoogleFirestoreAdminV1DatabaseInput
/**
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
**/
var GoogleFirestoreAdminV1DatabaseInput = /** @class */ (function (_super) {
    __extends(GoogleFirestoreAdminV1DatabaseInput, _super);
    function GoogleFirestoreAdminV1DatabaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineIntegrationMode" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1DatabaseInput.prototype, "appEngineIntegrationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concurrencyMode" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1DatabaseInput.prototype, "concurrencyMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1DatabaseInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1DatabaseInput.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1DatabaseInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1DatabaseInput.prototype, "type", void 0);
    return GoogleFirestoreAdminV1DatabaseInput;
}(SpeakeasyBase));
export { GoogleFirestoreAdminV1DatabaseInput };
