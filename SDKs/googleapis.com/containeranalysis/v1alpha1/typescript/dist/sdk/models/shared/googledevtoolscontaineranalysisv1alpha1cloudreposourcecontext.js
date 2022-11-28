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
import { GoogleDevtoolsContaineranalysisV1alpha1AliasContext } from "./googledevtoolscontaineranalysisv1alpha1aliascontext";
import { GoogleDevtoolsContaineranalysisV1alpha1RepoId } from "./googledevtoolscontaineranalysisv1alpha1repoid";
// GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext
/**
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
**/
var GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext = /** @class */ (function (_super) {
    __extends(GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext, _super);
    function GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aliasContext" }),
        __metadata("design:type", GoogleDevtoolsContaineranalysisV1alpha1AliasContext)
    ], GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext.prototype, "aliasContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repoId" }),
        __metadata("design:type", GoogleDevtoolsContaineranalysisV1alpha1RepoId)
    ], GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext.prototype, "repoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext.prototype, "revisionId", void 0);
    return GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext;
}(SpeakeasyBase));
export { GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext };
