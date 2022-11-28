package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Achievements struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAchievements(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Achievements {
	return &Achievements{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GamesManagementAchievementsReset - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
func (s *Achievements) GamesManagementAchievementsReset(ctx context.Context, request operations.GamesManagementAchievementsResetRequest) (*operations.GamesManagementAchievementsResetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/games/v1management/achievements/{achievementId}/reset", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GamesManagementAchievementsResetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AchievementResetResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AchievementResetResponse = out
		}
	}

	return res, nil
}

// GamesManagementAchievementsResetAll - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
func (s *Achievements) GamesManagementAchievementsResetAll(ctx context.Context, request operations.GamesManagementAchievementsResetAllRequest) (*operations.GamesManagementAchievementsResetAllResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/games/v1management/achievements/reset"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GamesManagementAchievementsResetAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AchievementResetAllResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AchievementResetAllResponse = out
		}
	}

	return res, nil
}

// GamesManagementAchievementsResetAllForAllPlayers - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
func (s *Achievements) GamesManagementAchievementsResetAllForAllPlayers(ctx context.Context, request operations.GamesManagementAchievementsResetAllForAllPlayersRequest) (*operations.GamesManagementAchievementsResetAllForAllPlayersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/games/v1management/achievements/resetAllForAllPlayers"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GamesManagementAchievementsResetAllForAllPlayersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GamesManagementAchievementsResetForAllPlayers - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
func (s *Achievements) GamesManagementAchievementsResetForAllPlayers(ctx context.Context, request operations.GamesManagementAchievementsResetForAllPlayersRequest) (*operations.GamesManagementAchievementsResetForAllPlayersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/games/v1management/achievements/{achievementId}/resetForAllPlayers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GamesManagementAchievementsResetForAllPlayersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GamesManagementAchievementsResetMultipleForAllPlayers - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.
func (s *Achievements) GamesManagementAchievementsResetMultipleForAllPlayers(ctx context.Context, request operations.GamesManagementAchievementsResetMultipleForAllPlayersRequest) (*operations.GamesManagementAchievementsResetMultipleForAllPlayersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/games/v1management/achievements/resetMultipleForAllPlayers"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GamesManagementAchievementsResetMultipleForAllPlayersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
