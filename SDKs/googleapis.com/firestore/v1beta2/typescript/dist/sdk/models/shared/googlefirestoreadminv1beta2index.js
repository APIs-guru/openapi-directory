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
import { GoogleFirestoreAdminV1beta2IndexField } from "./googlefirestoreadminv1beta2indexfield";
export var GoogleFirestoreAdminV1beta2IndexQueryScopeEnum;
(function (GoogleFirestoreAdminV1beta2IndexQueryScopeEnum) {
    GoogleFirestoreAdminV1beta2IndexQueryScopeEnum["QueryScopeUnspecified"] = "QUERY_SCOPE_UNSPECIFIED";
    GoogleFirestoreAdminV1beta2IndexQueryScopeEnum["Collection"] = "COLLECTION";
    GoogleFirestoreAdminV1beta2IndexQueryScopeEnum["CollectionGroup"] = "COLLECTION_GROUP";
})(GoogleFirestoreAdminV1beta2IndexQueryScopeEnum || (GoogleFirestoreAdminV1beta2IndexQueryScopeEnum = {}));
export var GoogleFirestoreAdminV1beta2IndexStateEnum;
(function (GoogleFirestoreAdminV1beta2IndexStateEnum) {
    GoogleFirestoreAdminV1beta2IndexStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleFirestoreAdminV1beta2IndexStateEnum["Creating"] = "CREATING";
    GoogleFirestoreAdminV1beta2IndexStateEnum["Ready"] = "READY";
    GoogleFirestoreAdminV1beta2IndexStateEnum["NeedsRepair"] = "NEEDS_REPAIR";
})(GoogleFirestoreAdminV1beta2IndexStateEnum || (GoogleFirestoreAdminV1beta2IndexStateEnum = {}));
// GoogleFirestoreAdminV1beta2Index
/**
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
**/
var GoogleFirestoreAdminV1beta2Index = /** @class */ (function (_super) {
    __extends(GoogleFirestoreAdminV1beta2Index, _super);
    function GoogleFirestoreAdminV1beta2Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleFirestoreAdminV1beta2IndexField }),
        __metadata("design:type", Array)
    ], GoogleFirestoreAdminV1beta2Index.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1beta2Index.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryScope" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1beta2Index.prototype, "queryScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1beta2Index.prototype, "state", void 0);
    return GoogleFirestoreAdminV1beta2Index;
}(SpeakeasyBase));
export { GoogleFirestoreAdminV1beta2Index };
