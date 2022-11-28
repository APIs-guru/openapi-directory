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
import { GoogleFirestoreAdminV1IndexField } from "./googlefirestoreadminv1indexfield";
export var GoogleFirestoreAdminV1IndexApiScopeEnum;
(function (GoogleFirestoreAdminV1IndexApiScopeEnum) {
    GoogleFirestoreAdminV1IndexApiScopeEnum["AnyApi"] = "ANY_API";
    GoogleFirestoreAdminV1IndexApiScopeEnum["DatastoreModeApi"] = "DATASTORE_MODE_API";
})(GoogleFirestoreAdminV1IndexApiScopeEnum || (GoogleFirestoreAdminV1IndexApiScopeEnum = {}));
export var GoogleFirestoreAdminV1IndexQueryScopeEnum;
(function (GoogleFirestoreAdminV1IndexQueryScopeEnum) {
    GoogleFirestoreAdminV1IndexQueryScopeEnum["QueryScopeUnspecified"] = "QUERY_SCOPE_UNSPECIFIED";
    GoogleFirestoreAdminV1IndexQueryScopeEnum["Collection"] = "COLLECTION";
    GoogleFirestoreAdminV1IndexQueryScopeEnum["CollectionGroup"] = "COLLECTION_GROUP";
    GoogleFirestoreAdminV1IndexQueryScopeEnum["CollectionRecursive"] = "COLLECTION_RECURSIVE";
})(GoogleFirestoreAdminV1IndexQueryScopeEnum || (GoogleFirestoreAdminV1IndexQueryScopeEnum = {}));
export var GoogleFirestoreAdminV1IndexStateEnum;
(function (GoogleFirestoreAdminV1IndexStateEnum) {
    GoogleFirestoreAdminV1IndexStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleFirestoreAdminV1IndexStateEnum["Creating"] = "CREATING";
    GoogleFirestoreAdminV1IndexStateEnum["Ready"] = "READY";
    GoogleFirestoreAdminV1IndexStateEnum["NeedsRepair"] = "NEEDS_REPAIR";
})(GoogleFirestoreAdminV1IndexStateEnum || (GoogleFirestoreAdminV1IndexStateEnum = {}));
// GoogleFirestoreAdminV1Index
/**
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
**/
var GoogleFirestoreAdminV1Index = /** @class */ (function (_super) {
    __extends(GoogleFirestoreAdminV1Index, _super);
    function GoogleFirestoreAdminV1Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiScope" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Index.prototype, "apiScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleFirestoreAdminV1IndexField }),
        __metadata("design:type", Array)
    ], GoogleFirestoreAdminV1Index.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Index.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryScope" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Index.prototype, "queryScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1Index.prototype, "state", void 0);
    return GoogleFirestoreAdminV1Index;
}(SpeakeasyBase));
export { GoogleFirestoreAdminV1Index };
