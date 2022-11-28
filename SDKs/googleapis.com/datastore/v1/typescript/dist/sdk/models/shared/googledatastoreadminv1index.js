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
import { GoogleDatastoreAdminV1IndexedProperty } from "./googledatastoreadminv1indexedproperty";
export var GoogleDatastoreAdminV1IndexAncestorEnum;
(function (GoogleDatastoreAdminV1IndexAncestorEnum) {
    GoogleDatastoreAdminV1IndexAncestorEnum["AncestorModeUnspecified"] = "ANCESTOR_MODE_UNSPECIFIED";
    GoogleDatastoreAdminV1IndexAncestorEnum["None"] = "NONE";
    GoogleDatastoreAdminV1IndexAncestorEnum["AllAncestors"] = "ALL_ANCESTORS";
})(GoogleDatastoreAdminV1IndexAncestorEnum || (GoogleDatastoreAdminV1IndexAncestorEnum = {}));
export var GoogleDatastoreAdminV1IndexStateEnum;
(function (GoogleDatastoreAdminV1IndexStateEnum) {
    GoogleDatastoreAdminV1IndexStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleDatastoreAdminV1IndexStateEnum["Creating"] = "CREATING";
    GoogleDatastoreAdminV1IndexStateEnum["Ready"] = "READY";
    GoogleDatastoreAdminV1IndexStateEnum["Deleting"] = "DELETING";
    GoogleDatastoreAdminV1IndexStateEnum["Error"] = "ERROR";
})(GoogleDatastoreAdminV1IndexStateEnum || (GoogleDatastoreAdminV1IndexStateEnum = {}));
// GoogleDatastoreAdminV1Index
/**
 * Datastore composite index definition.
**/
var GoogleDatastoreAdminV1Index = /** @class */ (function (_super) {
    __extends(GoogleDatastoreAdminV1Index, _super);
    function GoogleDatastoreAdminV1Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ancestor" }),
        __metadata("design:type", String)
    ], GoogleDatastoreAdminV1Index.prototype, "ancestor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexId" }),
        __metadata("design:type", String)
    ], GoogleDatastoreAdminV1Index.prototype, "indexId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], GoogleDatastoreAdminV1Index.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], GoogleDatastoreAdminV1Index.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleDatastoreAdminV1IndexedProperty }),
        __metadata("design:type", Array)
    ], GoogleDatastoreAdminV1Index.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleDatastoreAdminV1Index.prototype, "state", void 0);
    return GoogleDatastoreAdminV1Index;
}(SpeakeasyBase));
export { GoogleDatastoreAdminV1Index };
// GoogleDatastoreAdminV1IndexInput
/**
 * Datastore composite index definition.
**/
var GoogleDatastoreAdminV1IndexInput = /** @class */ (function (_super) {
    __extends(GoogleDatastoreAdminV1IndexInput, _super);
    function GoogleDatastoreAdminV1IndexInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ancestor" }),
        __metadata("design:type", String)
    ], GoogleDatastoreAdminV1IndexInput.prototype, "ancestor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], GoogleDatastoreAdminV1IndexInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleDatastoreAdminV1IndexedProperty }),
        __metadata("design:type", Array)
    ], GoogleDatastoreAdminV1IndexInput.prototype, "properties", void 0);
    return GoogleDatastoreAdminV1IndexInput;
}(SpeakeasyBase));
export { GoogleDatastoreAdminV1IndexInput };
