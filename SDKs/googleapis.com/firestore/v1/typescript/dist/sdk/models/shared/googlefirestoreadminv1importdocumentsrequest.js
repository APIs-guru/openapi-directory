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
// GoogleFirestoreAdminV1ImportDocumentsRequest
/**
 * The request for FirestoreAdmin.ImportDocuments.
**/
var GoogleFirestoreAdminV1ImportDocumentsRequest = /** @class */ (function (_super) {
    __extends(GoogleFirestoreAdminV1ImportDocumentsRequest, _super);
    function GoogleFirestoreAdminV1ImportDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionIds" }),
        __metadata("design:type", Array)
    ], GoogleFirestoreAdminV1ImportDocumentsRequest.prototype, "collectionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputUriPrefix" }),
        __metadata("design:type", String)
    ], GoogleFirestoreAdminV1ImportDocumentsRequest.prototype, "inputUriPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceIds" }),
        __metadata("design:type", Array)
    ], GoogleFirestoreAdminV1ImportDocumentsRequest.prototype, "namespaceIds", void 0);
    return GoogleFirestoreAdminV1ImportDocumentsRequest;
}(SpeakeasyBase));
export { GoogleFirestoreAdminV1ImportDocumentsRequest };
