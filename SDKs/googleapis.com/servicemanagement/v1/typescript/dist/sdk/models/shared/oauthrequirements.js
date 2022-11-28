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
// OAuthRequirements
/**
 * OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.
**/
var OAuthRequirements = /** @class */ (function (_super) {
    __extends(OAuthRequirements, _super);
    function OAuthRequirements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalScopes" }),
        __metadata("design:type", String)
    ], OAuthRequirements.prototype, "canonicalScopes", void 0);
    return OAuthRequirements;
}(SpeakeasyBase));
export { OAuthRequirements };
